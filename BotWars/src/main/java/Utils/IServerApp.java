package Utils;

import java.io.File;

public interface IServerApp {
    // LIST
    public int downloadListTournaments();
    public int downloadListGames();
    public int downloadListPlayers();

    public String[] getListTournaments();
    public String[] getListGames();
    public String[] getListPlayers();

    // GAME
    public int downloadRulesRulesForTheTournament(int tournament_id);
    public int downloadRequierments(int tournament_id);
    public int downloadTournamentInfo(int tournament_id);
    public int downloadTournamentInfo(String Player, String code, int tournament_id);

    public TournamentInfo getTournamentInfo(int tournamentId);
    public BotRequierments getBotRequiermentsForGame(int tournament_id);
    public File getRulesForTheTournament(int tournament_id);

    // CONF
    public int registerPlayer(String player, String code);
    public int unregisterPlayer(String player, String code);

    public int registerForGame(String player, String code, int tournament_id);
    public int unregisterFromGame(String player, String code, int tournament_id);
    public int updateUserInfo(String player, String code, Klient klient);



}
