export default interface InvoiceItem {
    number: number,
    type: string,
    description: string,
    unitPrice: number,
    quantity: number,
    subtotal: number,
    taxCode: number,
    tax: number,
    total: number,
    notes?: string
}