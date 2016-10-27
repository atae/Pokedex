    json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

    # json.set! :items do
    #   json.array!(@pokemon.items) do |item|
    #     json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
    #   end
    # end

    json.set! :items do
      json.array! @pokemon.items, :id, :pokemon_id, :name, :price, :happiness
    end
