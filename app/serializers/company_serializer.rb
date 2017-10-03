class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :category, :authorized, :tasks

  def authorized
    object.users.include?(@scope)
  end

end
