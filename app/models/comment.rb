class Comment < ApplicationRecord
  belongs_to :service

  validates :body, :min, presence: true
  validates :min, numericality: { only_integer: true }
end
