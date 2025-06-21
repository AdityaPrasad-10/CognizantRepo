public class Logger {
    private static Logger log;
    private Logger(){
        System.out.println("Instance created from priv logger");
    }
    public static Logger getInst(){
        if(log==null){
            log=new Logger();
        }
        return log;
    }
}
