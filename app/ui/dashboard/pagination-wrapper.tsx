import { fetchInvoicesPages } from "@/app/lib/data";
import Pagination from "../invoices/pagination";

export async function PaginationWrapper({ query }: { query: string }) {
    const totalPages = await fetchInvoicesPages(query || '');
    return <Pagination totalPages={totalPages} />;
  }