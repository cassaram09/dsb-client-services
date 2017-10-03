class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :category, :authorized

  def authorized
    object.users.include?(@scope)
  end
  
end
