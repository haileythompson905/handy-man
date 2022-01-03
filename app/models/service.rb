class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy
  
  validates :type, :mins, :desc, presence: true
  validates :min, numericality: { only_integer: true }
end
