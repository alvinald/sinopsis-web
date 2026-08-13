package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	// Initialize gin
	router := gin.Default()

	// set up CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"*"},
		AllowMethods:  []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:  []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders: []string{"Content-Length"},
	}))

	// auth routes (no auth required)
	// auth := router.Group("/api")
	// {
	// 	auth.POST("/login", authController.Login)
	// }

	// Serve static files from public/uploads
	router.Static("/uploads", "./public/uploads")

	return router
}
