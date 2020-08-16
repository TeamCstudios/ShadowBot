# Get lines
Dir["#{File.dirname(__FILE__)}/commands/*.js"].sort.each do |wow|
  File.readlines(wow).each do |line|
    next unless line.include? 'super'

    puts line.split(" super('")[1].split("', {")[0]
  end
end
