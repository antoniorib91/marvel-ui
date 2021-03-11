class PaginationService {
  private currentItensCount = 0;

  private currentItensLimit = 20;

  private currentTotalOfItens = 0;

  get totalOfItens(): number {
    return this.currentTotalOfItens;
  }

  set totalOfItens(value: number) {
    this.currentTotalOfItens = value;
  }

  get itensCount(): number {
    return this.currentItensCount;
  }

  set itensCount(value: number) {
    this.currentItensCount = value;
  }

  public getPaginationParams(): string {
    const queryParams = `?limit=${this.currentItensLimit}&offset=${this.currentItensCount}`;
    this.currentItensCount += this.currentItensLimit;
    return queryParams;
  }
}

const Pagination = new PaginationService();

export default Pagination;
