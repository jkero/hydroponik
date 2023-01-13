# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Hydroponique'
copyright = '2023, jk'
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
              'sphinx.ext.viewcode']

plantuml = ['java', '-jar', '/usr/share/umltools/plantuml.jar']

GRAPHVIZ_DOT='/usr/bin/dot'

templates_path = ['_templates']
exclude_patterns = []

language = 'fr'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']
html_css_files = ['css/custom.css',]

