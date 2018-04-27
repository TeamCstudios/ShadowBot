# Get lines
he = File.readlines('index.js') { |line| line.split.map(&:to_s).join }
he.each do |e|
  e.delete!("\n")
end
start = he.index { |s| s.include?('// Show all commands') }
finish = he.index { |s| s.include?('// Return the bot\'s uptime in hours.') }

c = he[start + 3..finish - 4]

c.each do |f|
  f.gsub!('      "\n" + prefix + ', '!')
  f.gsub!('      "\n" + ', '')
  f.gsub!(' +', '')
  f.delete!('"')
  f.gsub!(' prefix ', '!')
  f.delete!('```')
  ar = f.split(':')
  ar[0] = '## `' + ar[0] + '`'
  ar[1] = ar[1][1..ar[1].length]
  puts ar.join("\n")
  puts "\n"
end
