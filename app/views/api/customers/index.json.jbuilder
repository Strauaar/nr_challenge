json.array! @customers do |customer|
    json.first_name customer.first_name
    json.last_name customer.last_name
    json.company customer.company.name
end