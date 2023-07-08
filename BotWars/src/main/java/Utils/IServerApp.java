package Utils;

public interface IServerApp {
    public String[] getListTournaments();
    public String[] getListGames();
    public String[] getListPlayers();
    public boolean registerPlayer(String player, String code);
    public boolean unregisterPlayer(String player, String code);
    public BotRequierments getBotRequiermentsForGame(int id);
    public boolean registerForGame(String player, String code, int id);
    public boolean unregisterFromGame(String player, String code, int id);
    public boolean updateUserInfo(String player, String code, Klient klient);
}
