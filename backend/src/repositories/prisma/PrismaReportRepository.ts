import { IReportRepository } from "repositories/interfaces/IReportRepository";
import { database } from "lib/Database";

// Daily sales revenue
// Most famous main dish
// Most famous side dish
// Which side dish is consumed most with which main dish
// API endpoints (where applicable)

export class PrismaReportRepository implements IReportRepository {

    async getDailySalesRevenue(date: String): Promise<any> {
        // SELECT SUM(Order.total) FROM "Order" WHERE DATE(Order.createdAt) = DATE($1)
        // problem is that prisma doesnt have date function
        // isntead we have to use greater than and less than

        const startDate = new Date(`${date}T00:00:00.000Z`);
        const endDate = new Date(`${date}T23:59:59.999Z`);

        const result = await database.order.aggregate({
            _sum: {
                total: true
            },
            where: {
                date: {
                    gte: startDate, lte: endDate
                }
            }
        })

        return result;
    }

    async getFamousMainDish(): Promise<any> {
        // SELECT m.name, SUM(oi.quantity) AS total_quantity FROM OrderItem oi
        // INNER JOIN  MenuItem m ON oi.menuId = m.id
        // INNER JOIN Type t ON t.id = m.typeId
        // WHERE t.name = "Main Dish"
        // GROUP BY m.name
        // ORDER BY SUM(oi.quantity) DESC
        // LIMIT 1

        const result = await database.orderItem.groupBy({
            by: ['menuId'],
            // must include the relation
            where: {
                menu: {
                    type: {
                        name: "Main Dish"
                    }
                }
            },
            // after grouping we need the sum
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {quantity: 'desc'},

            },
            take: 1,
        })

        return result;


    }

    async getFamousSideDish(): Promise<any> {

        // same as the main dish, just the the type name changes

        const result = await database.orderItem.groupBy({
            by: ['menuId'],
            // must include the relation
            where: {
                menu: {
                    type: {
                        name: "Side Dish"
                    }
                }
            },
            // after grouping we need the sum
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {quantity: 'desc'},

            },
            take: 1,
        })

        return result;

    }

    async getMostPopularSideDishForEachMainDish(): Promise<any> {

    // so we need to get the main - side dish combinations first
    // select m.name, s.name, COUNT(DISTINCT ois) AS combinations
    // from OrderItem oim
    // INNER JOIN MenuItem mdd ON oim.menuId = mdd.id
    // inner join Type tm on mdd.typeId = tm.id
    // // now we self join the side dish id
    // INNER JOIN OrderItem ois ON ois.orderId = oim.orderId // matching the same order
    // INNER JOIN MenuItem mds ON ois.menuId = mds.id
    // INNER JOIN Type ts ON mds.typeId = ts.id

    // where td.name = "Main Dish" AND ts.name ="Side dish" AND mdd.id <> mds.id
    // group by mdd.name, mds.name
    // ORDER BY combinations DESC
    // LIMIT 1

    // im not sure if prisma can handle this, so ill be using normal sql for this!
    // we can have 2 popular dishes, so im going to show all and filter it in the frontend

        const result = await database.$queryRaw`
            SELECT mdd.name AS main_dish, mds.name AS side_dish, COUNT(DISTINCT ois.id) AS combinations FROM "OrderItem" oim
            INNER JOIN "MenuItem" mdd ON oim."menuId" = mdd.id
            INNER JOIN "Type" tm ON mdd."typeId" = tm.id
            INNER JOIN "OrderItem" ois ON ois."orderId" = oim."orderId"
            INNER JOIN "MenuItem" mds ON ois."menuId" = mds.id
            INNER JOIN "Type" ts ON mds."typeId" = ts.id
            WHERE tm.name = 'Main Dish' AND ts.name = 'Side Dish' AND mdd.id <> mds.id
            GROUP BY mdd.name, mds.name
            ORDER BY combinations DESC`;
            // LIMIT 1;`;

    }
}

export default PrismaReportRepository;