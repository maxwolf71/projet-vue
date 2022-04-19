<?php
namespace cooking;

class Plugin 
{
    public function __construct() {
        add_action(
            'init',
            [$this, 'createRecipePostType']
        );
    }

    public function activate() {
        $this->registerChefRole();
        // $this->registerCustomerRole();

        
    }

    public function createRecipePostType()
    {
        register_post_type(
            'recipe',
            [
                'label' => 'Recette',
                'public' => true,
                'hierarchical' => false,
                'menu_icon' => 'dashicons-food',
                'supports' => [
                    'title',
                    'thumbnail',
                    'editor',
                    'author',
                ],
                'capability_type' => 'recipe',
                'map_meta_cap' => true,

                // IMPORTANT WP le cpt recipe est accessible depuis l'api wordpress
                'show_in_rest' => true
            ]
        );
    }

    public function deactivate() 
    {
        remove_role('chef');
    }

    public function registerChefRole()
    {
        add_role(
            'chef',
            'Chef Cuisinier'
        );
    }
}