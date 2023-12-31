module Jekyll
    class WithinCategoryPostNavigation < Generator
        def generate(site)
            posts = site.categories["Warcraft Retrospective"].clone

            posts.sort! { |a,b| a <=> b}
            
            posts.each do |post|
                index = posts.index post
                next_in_category = nil
                previous_in_category = nil
                if index
                    if index < posts.length - 1
                    next_in_category = posts[index + 1]
                    end
                    if index > 0
                    previous_in_category = posts[index - 1]
                    end
                end
                post.data["next_in_category"] = next_in_category unless next_in_category.nil?
                post.data["previous_in_category"] = previous_in_category unless previous_in_category.nil?
            end
        end
    end
  end
