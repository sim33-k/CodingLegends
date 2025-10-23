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

    }

    async getFamousSideDish(): Promise<any> {

    }

    async getMostPopularSideDishForEachMainDish(): Promise<any> {

    }
}

export default PrismaReportRepository;