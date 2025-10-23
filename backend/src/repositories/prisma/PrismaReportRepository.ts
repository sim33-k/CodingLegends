import { IReportRepository } from "repositories/interfaces/IReportRepository";


// Daily sales revenue
// Most famous main dish
// Most famous side dish
// Which side dish is consumed most with which main dish
// API endpoints (where applicable)

export class PrismaReportRepository implements IReportRepository {

    async getDailySalesRevenue(date: String): Promise<any> {

    }

    async getFamousMainDish(): Promise<any> {

    }

    async getFamousSideDish(): Promise<any> {

    }

    async getMostPopularSideDishForEachMainDish(): Promise<any> {

    }
}

export default PrismaReportRepository;