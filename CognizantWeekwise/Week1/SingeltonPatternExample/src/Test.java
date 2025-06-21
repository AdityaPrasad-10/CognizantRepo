//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Test {
    public static void main(String[] args) {
        Logger l1=Logger.getInst();
        Logger l2=Logger.getInst();
        if(l1==l2) System.out.println("1 Instance created");
        else System.out.println("2 Instance created");
    }
}