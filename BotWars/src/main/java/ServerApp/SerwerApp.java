package ServerApp;

import Utils.BotRequierments;
import Utils.IServerApp;
import Utils.Klient;

public class SerwerApp implements IServerApp {

    @Override
    public String[] getListTournaments() {
        return new String[0];
    }

    @Override
    public String[] getListGames() {
        return new String[0];
    }

    @Override
    public String[] getListPlayers() {
        return new String[0];
    }

    @Override
    public boolean registerPlayer(String player, String code) {
        return false;
    }

    @Override
    public boolean unregisterPlayer(String player, String code) {
        return false;
    }

    @Override
    public BotRequierments getBotRequiermentsForGame(int id) {
        return null;
    }

    @Override
    public boolean registerForGame(String player, String code, int id) {
        return false;
    }

    @Override
    public boolean unregisterFromGame(String player, String code, int id) {
        return false;
    }

    @Override
    public boolean updateUserInfo(String player, String code, Klient klient) {
        return false;
    }
}
