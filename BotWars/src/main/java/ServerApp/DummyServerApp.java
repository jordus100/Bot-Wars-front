package ServerApp;

import Utils.BotRequierments;
import Utils.IServerApp;
import Utils.Klient;

public class DummyServerApp implements IServerApp {
    public DummyServerApp(){}

    @Override
    public String[] getListTournaments(){
        String [] l = new String[]{"[0] Warcaby - 07.07.2023", "[1] Szachy - 08.08.2023", "[3] Chińczyk - 09.09.2023"};
        return l;
    }

    @Override
    public String[] getListGames(){
        String [] l = new String[]{"Warcaby", "Szachy", "Chińczyk"};
        return l;
    }

    @Override
    public String[] getListPlayers(){
        String [] l = new String[]{"Jurek", "Marek", "Darek"};
        return l;
    }

    @Override
    public boolean registerPlayer(String player, String code){
        return true;
    }

    @Override
    public boolean unregisterPlayer(String player, String code){
        return true;
    }

    @Override
    public BotRequierments getBotRequiermentsForGame(int id){
        return new BotRequierments();
    }

    @Override
    public boolean registerForGame(String player, String code, int id){
        return true;
    }

    @Override
    public boolean unregisterFromGame(String player, String code, int id){
        return true;
    }

    @Override
    public boolean updateUserInfo(String player, String code, Klient klient){
        return true;
    }
}
