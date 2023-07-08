package Utils;

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Klient {
    private String name;
    private String serverDomain;
    private String code;
    private String [] modelsPaths;
    private String [] modelsName;
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

    public String[] getModelsPaths() {
        return modelsPaths;
    }

    public String[] getModelsName() {
        return modelsName;
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

    public void setModelsPaths(int index, String modelsPath) {
        this.modelsPaths[index] = modelsPath;
        saveUser();
    }

    public void setModelsName(int index, String modelsName) {
        this.modelsName[index] = modelsName;
        saveUser();
    }

    public void setHistTournaments(int index, String histTournaments) {
        this.histTournaments[index] = histTournaments;
        saveUser();
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
        int n = modelsName.length;
        for(int i = 0; i < n; i++){
            if (modelsName[i] != null)
                writer.write("Model: \"" + modelsName[i] + "\" \"" + modelsPaths[i] + "\"");
        }
    }

    private void loadUser(BufferedReader reader) throws IOException {
        int index = 0;
        modelsPaths = new String[20];
        modelsName = new String[20];

        String modelPattern = "Model: \"(\\w+)\" \"([.*])\"";
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
                    modelsName[index] = m.group(1);
                    modelsPaths[index] = m.group(2);
                case "History":
                    break;
            }
        }
    }
}
