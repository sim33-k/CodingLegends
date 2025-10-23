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
            }
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

        // same as the main dish, just the 

    }

    async getMostPopularSideDishForEachMainDish(): Promise<any> {

    }
}

export default PrismaReportRepository;