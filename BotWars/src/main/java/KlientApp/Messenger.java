package KlientApp;

import Utils.TournamentInfo;

import java.io.BufferedReader;
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

    public void failedToRegitsterDueToBeUnknownPlayer(String name) {
    }

    public void failedToRegisterDueToAlreadyBeingRegisterd(String name) {
    }

    public void failedToRegisterDueToLackOfConnection() {
    }

    public void successfullyUnRegisterdForTournament(String name, TournamentInfo tournamentInfo) {
    }

    public void failedToUnRegisterDueToInvalidTornamentId(int tournament_id) {
    }

    public void failedToUnRegitsterDueToBeUnknownPlayer(String name) {
    }

    public void failedToUnRegisterDueToNotBeingRegisterd(String name) {
    }

    public void failedToUnRegisterDueToLackOfConnection() {
    }

    public void displayTournamentInfo(TournamentInfo tournamentInfo) {
    }

    public void displayTournamentInfoWhenRegisterd(TournamentInfo tournamentInfo) {
    }
}
