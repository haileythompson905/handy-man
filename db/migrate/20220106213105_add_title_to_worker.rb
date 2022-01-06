class AddTitleToWorker < ActiveRecord::Migration[6.1]
  def change
    add_column :workers, :title, :string
  end
end
