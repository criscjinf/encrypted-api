export class Repository<T> {
  private data: { [key: string]: T } = {};

  async upsert(key: string, value: T): Promise<void> {
    this.data[key] = value;
  }

  async search(key: string): Promise<T> {
    return this.data[key];
  }
}
