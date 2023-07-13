package Utils;

import java.io.*;
import java.util.HashMap;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Klient {
    private String name;
    private String serverDomain;
    private String code;
    private HashMap<Game, String> paths;
    private boolean isRegistered;

    public boolean isRegistered() {
        return isRegistered;
    }

    private String [] histTournaments;
    private File conf = new File("userconf.txt");

    public String getName() {
        return name;
    }

    public String getServersDomain() {
        return serverDomain;
    }

    public String getCodes() {
        return code;
    }

    public String getServerDomain() {
        return serverDomain;
    }

    public String getCode() {
        return code;
    }

    public String[] getHistTournaments() {
        return histTournaments;
    }

    public void setName(String name) {
        this.name = name;
        saveUser();
    }

    public void setServerDomain(String serverDomain) {
        this.serverDomain = serverDomain;
        saveUser();
    }

    public void setCode(String code) {
        this.code = code;
        saveUser();
    }

    public void addModelsPaths(Game game, String modelsPath) {
        paths.put(game, modelsPath);
        saveUser();
    }

    public void setHistTournaments(int index, String histTournaments) {
        this.histTournaments[index] = histTournaments;
        saveUser();
    }

    public Set<Game> getKnownGames(){
        return paths.keySet();
    }

    public Klient(){
        try {
            if(!conf.exists()) {
                conf.createNewFile();
                return;
            }
            FileReader reader = new FileReader(conf);
            BufferedReader reader1 = new BufferedReader(reader);
            loadUser(reader1);
        }catch (IOException e){
            ;
        }
    }

    private void saveUser(){
        try {
            FileWriter writer = new FileWriter(conf);
            BufferedWriter writer1 = new BufferedWriter(writer);
            saveUserToFile(writer1);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private void saveUserToFile(BufferedWriter writer) throws IOException{
        if (name != null)
            writer.write("User: " + name);
        if (serverDomain != null)
            writer.write("Server: " + serverDomain);
        if (code != null)
            writer.write("Code: " + code);
        Set<Game> keys = paths.keySet();
        for(Game key : keys){
            writer.write("Model: \"" + key + "\" \"" + paths.get(key) + "\"");
        }
    }

    public String getPath(String key){
        return paths.get(key);
    }

    public void addPath(String key, String value){
        paths.put(Game.valueOf(key), value);
    }

    public void delPath(String key){
        paths.remove(key);
    }

    private void loadUser(BufferedReader reader) throws IOException {
        String modelPattern = "Model: \"([A-Z]+)\" \"([.*])\"";
        String attributePattern = "(\\w+): \"(.+)\"";

        Pattern attribute = Pattern.compile(attributePattern);
        Pattern model = Pattern.compile(modelPattern);

        Matcher m;
        String line;
        while((line = reader.readLine()) != null){
            m = attribute.matcher(line);
            switch (m.group(1)){
                case "User":
                    name = m.group(2);
                    break;
                case "Server":
                    serverDomain = m.group(2);
                    break;
                case "Code":
                    code = m.group(2);
                    break;
                case "Model":
                    m = model.matcher(m.group(2));
                    paths.put(Game.valueOf(m.group(1)), m.group(2));
                case "History":
                    break;
            }
        }
    }

    public int compareRequierments(){
        return 0;
    }

    public String modelSize(Game type) {
        return "";
    }

    public String getFailedTimeOutTest() {
        return "";
    }

    public String getUpsentMehotds(Game type, String[] interfaces) {
        return "";
    }
}
