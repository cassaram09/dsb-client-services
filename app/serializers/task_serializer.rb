class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :owner, :request_type
end
