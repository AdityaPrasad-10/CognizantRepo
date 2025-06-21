public interface Document {
    void create();
}
class WordDocument implements Document {
    @Override
    public void create() {
        System.out.println("Created word document .docx");
    }
}
class PdfDocument implements Document {
    @Override
    public void create() {
        System.out.println("Created pdf document .pdf");
    }
}
class ExcelDocument implements Document{
    @Override
    public void create(){
        System.out.println("Created excel document .xlsx");
    }
}

