package KlientApp;

import Utils.BotRequierments;
import Utils.Game;
import Utils.IServerApp;
import Utils.Klient;

import java.io.File;

public class KlientApp {
    private final Messenger messenger;
    private final Klient player;
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
            default:
                messenger.unknownOption(args[1]);
                break;
        }
    }

    private void parseGame(String[] args) {
        int tournament_id = Integer.parseInt(args[3]);
        int code;
        BotRequierments req = null;
        switch (args[2]) {
            case "--reg" -> {
                code = server.registerForGame(player.getName(), player.getCode(), tournament_id);
                switch (code) {
                    case 0 ->
                            messenger.successfullyRegisterdForTournament(
                                    player.getName(),
                                    server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.failedToRegisterDueToPlayersLimit(server.getTournamentInfo(tournament_id));
                    case 2 -> messenger.failedToRegisterDueToAlreadyBeingRegisterd(player.getName());

                    case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                    case 99 -> messenger.failedToPerformActionDueToBeUnknownPlayer(player.getName());
                    case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                }
            }
            case "--unr" -> {
                code = server.unregisterFromGame(player.getName(), player.getCode(), tournament_id);
                ;
                switch (code) {
                    case 0 ->
                            messenger.successfullyUnRegisterdForTournament(
                                    player.getName(),
                                    server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.failedToUnRegisterDueToInvalidTornamentId(tournament_id);
                    case 2 -> messenger.failedToUnRegisterDueToNotBeingRegisterd(player.getName());

                    case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                    case 99 -> messenger.failedToPerformActionDueToBeUnknownPlayer(player.getName());
                    case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                }
            }
            case "--info" -> {
                if (player.isRegistered()) {
                    code = server.downloadTournamentInfo(player.getName(), player.getCodes(), tournament_id);
                    if (code != 0 && code != 1)
                        code = server.downloadTournamentInfo(tournament_id);
                } else
                    code = server.downloadTournamentInfo(tournament_id);
                switch (code) {
                    case 0 -> messenger.displayTournamentInfoWhenRegisterd(server.getTournamentInfo(tournament_id));
                    case 1 -> messenger.displayTournamentInfo(server.getTournamentInfo(tournament_id));

                    case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                    case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                }
            }
            case "--requirements" -> {
                code = server.downloadRequierments(tournament_id);
                if (code == 0) {
                    req = server.getBotRequiermentsForGame(tournament_id);
                }
                switch (code) {
                    case 0 -> messenger.displayBotRequierments(req);

                    case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                    case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                }
            }
            case "--rules" -> {
                code = server.downloadRulesRulesForTheTournament(tournament_id);
                File rules = null;
                if (code == 0) {
                    rules = server.getRulesForTheTournament(tournament_id);
                }
                switch (code) {
                    case 0 -> messenger.displayRules(rules);

                    case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                    case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                }
            }
            case "--verify" -> {
                code = server.downloadRequierments(tournament_id);
                if (code == 0) {
                    req = server.getBotRequiermentsForGame(tournament_id);
                } else {
                    switch (code) {
                        case 98 -> messenger.failedToPerformActionDueToInvalidTornamentId(tournament_id);
                        case 100 -> messenger.failedToPerformActionDueToLackOfConnection();
                    }
                    return;
                }
                assert req != null;
                code = player.compareRequierments();
                switch (code) {
                    case 0 -> messenger.requiermentsAreSatified();
                    case 1 -> messenger.sizeRequiermentNotSatisfied(req.size, player.modelSize(req.type));
                    case 2 -> messenger.timeOutRequiermentNotSatisfied(req.size, player.getFailedTimeOutTest());
                    case 3 ->
                            messenger.interfaceRequiermentNotSatisfied(req.interfaces, player.getUpsentMehotds(req.type, req.interfaces));
                    case 4 -> messenger.noModelForThisGame(req.type);
                }
            }
            default -> {
                messenger.unknownOption(args[2]);
            }
        }
    }

    private void parseConf(String[] args) {
        int n = args.length;
        if (n == 2) {
            displaySelfConfiguration();
            return;
        }
        if (n == 3) {
            displaySelfConfigurationForGame(Game.valueOf(args[2]));
            return;
        }
        switch (args[3]) {
            case "--add" -> {
                if (!verifyPathToModel(args[4])) {
                    messenger.invalidPath(args[4]);
                    return;
                }
                player.addPath(args[2], args[4]);
                messenger.successfullyAddedPath(args[2], args[4]);
            }
            case "--del" -> {
                if (player.getPath(args[2]) == null) {
                    messenger.invalidGameName(args[2]);
                    return;
                }
                player.delPath(args[2]);
                messenger.successfullyDeletedPath(args[2], args[4]);
            }
            default -> messenger.unknownOption(args[3]);
        }
    }

    private boolean verifyPathToModel(String arg) {
        return true; //TODO
    }

    private void displaySelfConfiguration() {
        for (Game game : player.getKnownGames()){
            displaySelfConfigurationForGame(game);
        }
    }

    private void displaySelfConfigurationForGame(Game game) {
        messenger.displayConfForGame(String.valueOf(game), player.getPath(String.valueOf(game)));
    }

    private void parseList(String arg){
        String [] list = new String[0];
        String title = "";
        switch (arg) {
            case "games" -> {
                title = "Aviable games:";
                list = server.getListGames();
            }
            case "tournaments" -> {
                title = "Aviable tournaments:";
                list = server.getListTournaments();
            }
            case "history" -> {
                title = "Tournaments history:";
                list = player.getHistTournaments();
            }
            case "players" -> {
                title = "Players:";
                list = server.getListPlayers();
            }
            default -> {
                messenger.unknownOption(arg);
            }
        }
        messenger.displayList(title, list);
    }
}

