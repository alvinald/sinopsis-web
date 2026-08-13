package models

import "time"

type Role struct {
	ID          uint         `json:"id" gorm:"primaryKey"`
	Name        string       `json:"name" gorm:"unique;not null"`
	Description string       `json:"description"`
	Status      string       `json:"status" gorm:"not null;default:'Active'"`
	Permissions []Permission `json:"permissions" gorm:"many2many:role_permissions"`
	CreatedAt   time.Time    `json:"createdAt"`
	UpdatedAt   time.Time    `json:"updatedAt"`
}
