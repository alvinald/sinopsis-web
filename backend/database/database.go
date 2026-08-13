package database

import (
	"fmt"
	"log"

	"github.com/alvinald/sinopsis-web/config"
	"github.com/alvinald/sinopsis-web/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {

	// Format DSN untuk MySQL
	// dsn := fmt.Sprintf(
	// 	"host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
	// 	GetEnv("DB_HOST", "localhost"),
	// 	GetEnv("DB_USER", "root"),
	// 	GetEnv("DB_PASSWORD", ""),
	// 	GetEnv("DB_NAME", "sinopsis_web"),
	// 	GetEnv("DB_PORT", "3306"),
	// 	GetEnv("DB_SSLMODE", "disable"),
	// )

	dsn := config.GetEnv("DB_URL", "")

	// Koneksi ke database
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	fmt.Println("Database connected successfully!")

	// **Auto Migrate Models**
	err = DB.AutoMigrate(&models.User{}, &models.Role{}, &models.Permission{}, &models.Category{}, &models.Menu{}) // Tambahkan model lain jika perlu
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	fmt.Println("Database migrated successfully!")

}
