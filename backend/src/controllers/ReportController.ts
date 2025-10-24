import { Request, Response } from "express";
import { ReportService } from "services/ReportService";
import { BaseController } from "./BaseController";

export class ReportController extends BaseController {
    private reportService: ReportService;

    // export interface IReportRepository {
    //     getDailySalesRevenue(date: String): Promise<any>;
    //     getFamousMainDish(): Promise<any>;
    //     getFamousSideDish(): Promise<any>;
    //     getMostPopularSideDishForEachMainDish(): Promise<any>;
    // }



    constructor(reportService: ReportService) {
        super();
        this.reportService = reportService;
    }

    public async getDailySalesRevenue(request: Request, response: Response): Promise<void> {

        if(typeof request.query.date !== 'string') {
            return this.sendError(response, 'error', 400);
        } 

        const date: string = request.query.date;


        try {
            const dailySalesRevenue = await this.reportService.getDailySalesRevenue(date);
            this.sendSuccess(response, dailySalesRevenue, 200);
        } catch (error) {
            return this.sendError(response, 'error', 500);
        }

    }


}