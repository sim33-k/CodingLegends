// I will not be extending the base service, because this service is specific to reports,

import { IReportRepository } from "repositories/interfaces/IReportRepository";

// Daily sales revenue
// Most famous main dish
// Most famous side dish
// Which side dish is consumed most with which main dish
// API endpoints (where applicable)
// getDailySalesRevenue(date: String): Promise<any>;
// getFamousMainDish(): Promise<any>;
// getFamousSideDish(): Promise<any>;
// getMostPopularSideDishForEachMainDish(): Promise<any>;



// and will not be used for normal cruds
export class ReportService {
    private repository: IReportRepository;

    constructor(reportRepository: IReportRepository) {
        this.repository = reportRepository;

    }

    public async getDailySalesRevenue(date: String): Promise<any> {
        return this.repository.getDailySalesRevenue(date);
    }

    public async getFamousMainDish(): Promise<any> {
        return this.repository.getFamousMainDish();
    }

    public async getFamousSideDish(): Promise<any> {
        return this.repository.getFamousSideDish();
    }

    public async getFamousDessert(): Promise<any> {
        return this.repository.getFamousDessert();
    }

    public async getMostPopularSideDishForEachMainDish(): Promise<any> {
        return this.repository.getMostPopularSideDishForEachMainDish();
    }
}