package Utils;

public interface IServerApp {
    public int downloadListTournaments();
    public int downloadListGames();
    public int downloadListPlayers();
    public int downloadTournamentInfo(int TournamentId);
    public int downloadTournamentInfo(String Player, String code, int TournamentId);

    public String[] getListTournaments();
    public String[] getListGames();
    public String[] getListPlayers();
    public TournamentInfo getTournamentInfo(int TournamentId);

    public int registerPlayer(String player, String code);
    public int unregisterPlayer(String player, String code);
    public BotRequierments getBotRequiermentsForGame(int id);
    public int registerForGame(String player, String code, int id);
    public int unregisterFromGame(String player, String code, int id);
    public int updateUserInfo(String player, String code, Klient klient);


}
