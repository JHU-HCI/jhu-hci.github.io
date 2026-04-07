module Jekyll
  class RedirectPage < Page
    def initialize(site, slug, url)
      @site  = site
      @base  = site.source
      @dir   = slug
      @name  = "index.html"

      process(@name)

      @data = {
        "layout"      => "redirect",
        "redirect_to" => url,
        "sitemap"     => false,
      }
    end
  end

  class RedirectGenerator < Generator
    safe true
    priority :low

    def generate(site)
      redirects_file = File.join(site.source, "redirects.yml")
      return unless File.exist?(redirects_file)
      redirects = YAML.load_file(redirects_file)
      return unless redirects.is_a?(Array)

      redirects.each do |r|
        slug = r["slug"].to_s.strip
        url  = r["url"].to_s.strip

        next if slug.empty? || url.empty?

        site.pages << RedirectPage.new(site, slug, url)
      end
    end
  end
end
