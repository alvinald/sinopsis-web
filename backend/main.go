package main

import (
	"github.com/alvinald/sinopsis-web/config"
	"github.com/alvinald/sinopsis-web/database"
	"github.com/alvinald/sinopsis-web/routes"
)

func main() {
	//load config .env
	config.LoadEnv()

	//inisialisasi database
	database.InitDB()

	//run seeders
	// seeders.Seed()

	//setup router
	r := routes.SetupRouter()

	//mulai server
	r.Run(":" + config.GetEnv("APP_PORT", "3000"))

	//mulai server dengan port 3000
	r.Run(":" + config.GetEnv("APP_PORT", "3000"))
}
