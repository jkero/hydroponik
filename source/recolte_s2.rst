Plan de culture
===============
.. uml::

    @startuml
        title Saison 2
        skinparam cardBackgroundColor lightgreen
        interface H2O

        card laitue
        card kale
        card coriandre
        card basilic
        card bette_à_carde
        card chicorée
        card persil
        H2O -u[#00aaff]-> coriandre
        H2O -u[#00aaff]->laitue
        H2O -u[#00aaff]-> basilic
        H2O -d[#00aaff]-> bette_à_carde
        H2O -d[#00aaff]-> chicorée
        H2O -d[#00aaff]-> persil
        H2O -u[#00aaff]-> kale
       @enduml

Le plan provisoire pour les semis :doc:`semis`