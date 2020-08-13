# Get lines
File.open('index.js', 'r') do |he|
  he.each_line do |f|
    next unless f.include?('prefix +') && f.include?('message.content')

    line = f.split('prefix + ')
    comm = line[1]
    if(comm.split("'").length == 1)
      command = comm.split('"')[1]
    else
      command = comm.split("'")[1]
    end

    puts "#{command.gsub(' ', '')}"
  end
end
