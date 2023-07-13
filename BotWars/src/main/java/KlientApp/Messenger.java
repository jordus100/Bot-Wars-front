package KlientApp;

import Utils.BotRequierments;
import Utils.Game;
import Utils.TournamentInfo;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Messenger {

    public void invalidPath(String path) {
    }

    public void successfullyAddedPath(String game, String path) {
    }

    public void invalidGameName(String game) {
    }

    public void successfullyDeletedPath(String game, String path) {
    }

    public void displayConfForGame(String game, String path) {
    }

    public void displayList(String title, String[] list) {
        System.out.println(title);
        if (list == null) return;
        for (String line : list){
            System.out.println(" - " + line);
        }
    }

    public void printHelp(){
        try {
            FileReader fileReader = new FileReader("src/main/java/KlientApp/KlientHelp.txt");
            BufferedReader reader = new BufferedReader(fileReader);
            String line;
            while((line = reader.readLine())!= null)
                System.out.println(line);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void successfullyRegisterdForTournament(String name, TournamentInfo tournamentInfo) {
    }

    public void failedToRegisterDueToPlayersLimit(TournamentInfo tournamentInfo) {
    }

    public void failedToRegisterDueToInvalidTornamentId(int tournament_id) {
    }

    public void failedToRegisterDueToAlreadyBeingRegisterd(String name) {
    }

    public void successfullyUnRegisterdForTournament(String name, TournamentInfo tournamentInfo) {
    }

    public void failedToUnRegisterDueToInvalidTornamentId(int tournament_id) {
    }

    public void failedToUnRegisterDueToNotBeingRegisterd(String name) {
    }

    public void displayTournamentInfo(TournamentInfo tournamentInfo) {
    }

    public void displayTournamentInfoWhenRegisterd(TournamentInfo tournamentInfo) {
    }

    public void failedToPerformActionDueToLackOfConnection() {
    }

    public void failedToPerformActionDueToBeUnknownPlayer(String name) {
    }

    public void failedToPerformActionDueToInvalidTornamentId(int tournament_id) {
    }

    public void displayBotRequierments(BotRequierments req){
    }

    public void displayRules(File rules) {
    }

    public void unknownOption(String arg) {
    }

    public void requiermentsAreSatified() {
    }

    public void sizeRequiermentNotSatisfied(int size, String modelSize) {
    }

    public void timeOutRequiermentNotSatisfied(int size, String failedTimeOutTest) {
    }

    public void interfaceRequiermentNotSatisfied(String[] interfaces, String upsentMehotds) {
    }

    public void noModelForThisGame(Game type) {
    }
}
