//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Test {
    public static void main(String[] args) {
        DocumentFactory wf=new WordDocumentFactory();
        Document worddoc= wf.CreateDocument();
        worddoc.create();
        DocumentFactory pf=new PdfDocumentFactory();
        Document pdfdoc= pf.CreateDocument();
        pdfdoc.create();
        DocumentFactory ef=new ExcelDocumentFactory();
        Document exceldoc= ef.CreateDocument();
        exceldoc.create();
    }
}