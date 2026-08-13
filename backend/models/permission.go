package models

type Permission struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Name        string `json:"name" gorm:"unique;not null"`
	Module      string `json:"module" gorm:"not null"`
	Description string `json:"description"`
	Roles       []Role `json:"roles" gorm:"many2many:role_permissions"`
}
