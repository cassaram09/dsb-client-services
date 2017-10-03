class UserSerializer < ActiveModel::Serializer
  attributes :id, :companies, :name, :email

  def companies
    if object.admin
      Company.all
    else
      object.companies
    end
  end
end
