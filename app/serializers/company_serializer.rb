class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :category
end
