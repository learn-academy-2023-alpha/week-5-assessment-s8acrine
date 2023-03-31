# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudocode:
# Define a method drink_finder
# applied to: an array of strings
# input: a string consisting of a single letter
# behavior: outputs an array containing only those strings which contain the given letter
# use the .select method to return a selection of the array
# use the .include? method to check if the value contains the given letter

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'  # Expected output: ['coffee', 'soda water']
letter_t = 't'  # Expected output: ['tea', 'water', 'soda water']

def drink_finder(letter, array)
    array.select {|v| v.include? letter}
end
p drink_finder(letter_o, beverages_array)
p drink_finder(letter_t, beverages_array)
# ┌[aaron@ACMBP] [/dev/ttys002] [ruby-challenges ⚡] 
# └[~/Desktop/week-5-assessment-s8acrine]> ruby ruby-challenges.rb
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Pseudocode:
# Define a method  state_sorter_a_z
# Input :(hash containing a set of arrays)
# Output: One array containing the arrays from the hash, in alphabetical order, with no nested arrays
# Create an empty array to return
# Use .each to iterate over each key value pair
# Use .each AGAIN to iterate over the array inside the hash
# Use the shovel operator to add values to a new array
# Use the .sort! method to sort the array in-place for performance
# Return the array 
# No nested arrays to even deal with!


us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def state_sorter_a_z hash
    states = []
    hash.each_value {|i| i.each {|j| states << j }  }
    states.sort!
end

p state_sorter_a_z us_states


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheel = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheel} wheels and is going #{@current_speed} mph"
    end

    def pedal_faster(amount)
        @current_speed += amount
        "You pedal faster and are now going #{@current_speed} mph"
    end

    def brake(amount)
        @current_speed -= amount
        if @current_speed < 0
            @current_speed = 0
        end
        "You hit the brakes and are now going #{@current_speed} mph"
    end

end

aaron_bike = Bike.new("Trek")
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
p aaron_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.



# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

p aaron_bike.pedal_faster 10
p aaron_bike.pedal_faster 18
p aaron_bike.brake 5
p aaron_bike.brake 25
# "You pedal faster and are now going 10 mph"
# "You pedal faster and are now going 28 mph"
# "You hit the brakes and are now going 23 mph"
# "You hit the brakes and are now going 0 mph"




