module.exports = {
    apps: [
        
        {
            name: "Primer servidor",
            script: "source/app.js",
            env:{
                PORT:8080
            },
            args: "--modo PM2"
        
        },

        {
            name: "Segundo servidor",
            script: "source/app.js",
            env:{
                PORT:8081
            },
            args: "--modo PM2"
        
        },
        {
            name: "Tercer servidor",
            script: "source/app.js",
            env:{
                PORT:8082
            },
            args: "--modo PM2"
          
        },
        {
            name: "Cuarto servidor",
            script:"source/app.js",
            env:{
                PORT:8083
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "Quinto servidor",
            script:"source/app.js",
            env:{
                PORT:8084
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "Sexto servidor",
            script:"source/app.js",
            env:{
                PORT:8085
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "Septimo servidor",
            script:"source/app.js",
            env:{
                PORT:8086
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },
    ]
}