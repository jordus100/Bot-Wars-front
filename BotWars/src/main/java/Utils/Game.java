package Utils;

public enum Game {
    CHESS,
    CHECKERS,
    CHINES,
    UNKNOWN;

    public Game parseString(String str){
        Game g;
        switch (str){
            case "CHESS" -> g = CHESS;
            case "CHECKERS" -> g = CHECKERS;
            case "CHINES" -> g = CHINES;
            default -> g = UNKNOWN;
        }
        return g;
    }
}
