package models

import "time"

type User struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Name      string    `json:"name"`
	Email     string    `json:"email" gorm:"unique;not null"`
	Roles     []Role    `json:"roles" gorm:"many2many:user_roles"`
	Status    string    `json:"status"`
	Avatar    string    `json:"avatar"`
	CreatedAt time.Time `json:"createdAt"`
}
