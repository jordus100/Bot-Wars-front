package KlientApp;

import Utils.IServerApp;
import Utils.Klient;

public class KlientApp {
    private final Messenger messenger;
    private Klient player;
    private final IServerApp server;

    public KlientApp(IServerApp serwer){
        server = serwer;
        player = new Klient();
        messenger = new Messenger();
    }

    public void doSomething(String [] args){
        switch (args[1]){
            case "server":

                break;
            case "conf":
                parseConf(args);
                break;
            case "player":

                break; //changing name should be verified if name is available.
            case "list":
                parseList(args[2]);
                break;
            case "game":
                parseGame(args);
                break;
            case "help":
            case "-h":
                messenger.printHelp();
                break;
        }
    }

    private void parseGame(String[] args) {
        int tournament_id = Integer.parseInt(args[3]);
        int code;
        switch (args[2]){
            case "--reg":
                code = server.registerForGame(player.getName(), player.getCode(), tournament_id);
                switch (code) {
                    case 0 -> messenger.successfullyRegisterdForTournament(player.getName(), server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.failedToRegisterDueToPlayersLimit(server.getTournamentInfo(tournament_id));
                    case 2 -> messenger.failedToRegisterDueToInvalidTornamentId(tournament_id);
                    case 3 -> messenger.failedToRegitsterDueToBeUnknownPlayer(player.getName());
                    case 4 -> messenger.failedToRegisterDueToAlreadyBeingRegisterd(player.getName());
                    case 5 -> messenger.failedToRegisterDueToLackOfConnection();
                }
                break;
            case "--unr":
                code = server.unregisterFromGame(player.getName(), player.getCode(), tournament_id);;
                switch (code) {
                    case 0 -> messenger.successfullyUnRegisterdForTournament(player.getName(), server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.failedToUnRegisterDueToInvalidTornamentId(tournament_id);
                    case 2 -> messenger.failedToUnRegitsterDueToBeUnknownPlayer(player.getName());
                    case 3 -> messenger.failedToUnRegisterDueToNotBeingRegisterd(player.getName());
                    case 4 -> messenger.failedToUnRegisterDueToLackOfConnection();
                }
                break;
            case "--info":
                if (player.isRegistered()) {
                    code = server.downloadTournamentInfo(player.getName(), player.getCodes(), tournament_id);
                    if (code != 0 && code != 1)
                        code = server.downloadTournamentInfo(tournament_id);
                }else
                    code = server.downloadTournamentInfo(tournament_id);
                switch (code){
                    case 0 -> messenger.displayTournamentInfoWhenRegisterd(server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.displayTournamentInfo(server.getTournamentInfo(tournament_id));
                    case 2 ->
                }
                break;
            case "--requirements":
                break;
            case "--rules":
                break;
            case "--verify":
                break;
        }
    }

    private void parseConf(String[] args) {
        int n = args.length;
        if (n == 2) {
            displaySelfConfiguration();
            return;
        }
        if (n == 3) {
            displaySelfConfigurationForGame(args[2]);
            return;
        }
        switch (args[3]) {
            case "--add":
                if (!verifyPath(args[4])) {
                    messenger.invalidPath(args[4]);
                    return;
                }
                player.addPath(args[2], args[4]);
                messenger.successfullyAddedPath(args[2], args[4]);
                    break;
            case "--del":
                if (player.getPath(args[2]) == null) {
                    messenger.invalidGameName(args[2]);
                    return;
                }
                player.delPath(args[2]);
                messenger.successfullyDeletedPath(args[2], args[4]);
                break;
        }
    }

    private boolean verifyPath(String arg) {
        return true; //TODO
    }

    private void displaySelfConfiguration() {
        for (String key : player.getKnownGames()){
            displaySelfConfigurationForGame(key);
        }
    }

    private void displaySelfConfigurationForGame(String game) {
        messenger.displayConfForGame(game, player.getPath(game));
    }

    private void parseList(String arg){
        String [] list = new String[0];
        String title = "";
        switch (arg){
            case "games":
                title = "Aviable games:";
                list = server.getListGames();
                break;
            case "tournaments":
                title = "Aviable tournaments:";
                list = server.getListTournaments();
                break;
            case "history":
                title = "Tournaments history:";
                list = player.getHistTournaments();
                break;
            case "players":
                title = "Players:";
                list = server.getListPlayers();
                break;
        }
        messenger.displayList(title, list);
    }
}

