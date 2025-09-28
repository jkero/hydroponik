# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Hydroponique'
copyright = '2024-2025, jk@spherik.ca'
author = 'jk'
release = '0.1'

import os
import sys

sys.path.append(os.path.abspath('sphinxext'))


# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinxcontrib.plantuml',
              'sphinx.ext.graphviz',
              'sphinx.ext.todo',
              'sphinx.ext.viewcode',
              'sphinx_rtd_theme',
              'sphinx.ext.intersphinx',
              ]

plantuml = ['java', '-jar', '/usr/share/java/plantuml/plantuml.jar']
#plantuml = ['java', '-jar', 'c:\\UML_tools\\plantuml\\plantuml.jar']

#GRAPHVIZ_DOT='C:\\UML_tools\\Graphviz\\bin\\dot.exe'
GRAPHVIZ_DOT='/usr/bin/dot'

templates_path = ['_templates']
exclude_patterns = []

language = 'fr'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_theme_options = {'show_powered_by' : 'False',} 
html_theme_options = {
    'analytics_anonymize_ip': False,
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': False,
    'vcs_pageview_mode': '',
    'style_nav_header_background': '#087A19',
    # Toc options
    'collapse_navigation': True,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False,}
html_show_sourcelink = False
html_static_path = ['_static','_static/externe','_static/externe/plantes','_static/externe/plantes/css','_static/externe/plantes/js']
html_css_files = ['jk.css']
html_output_encoding = 'utf-8'

today_fmt = '%d %b %Y'

todo_include_todos = True
todolist = True
todo_link_only = True




