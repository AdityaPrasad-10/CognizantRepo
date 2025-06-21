public abstract class DocumentFactory {
    public abstract Document CreateDocument();
}
class WordDocumentFactory extends DocumentFactory{
    @Override
    public Document CreateDocument(){
        return new WordDocument();
    }
}
class PdfDocumentFactory extends DocumentFactory{
    @Override
    public Document CreateDocument(){
        return new PdfDocument();
    }
}
class ExcelDocumentFactory extends DocumentFactory{
    @Override
    public Document CreateDocument(){
        return new ExcelDocument();
    }
}
