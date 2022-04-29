<?php

namespace Cooking;

use WP_REST_Request;
use WP_User;

class Api
{
    /**
     *  @var string
     */
    protected $baseURI;

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'initialize']);
    }

    public function initialize()
    {
        $this->baseURI = dirname($_SERVER['SCRIPT_NAME']);

        register_rest_route(
            'cooking/v1', // name of the API (endpoint)
            '/register', // route following our API
            [
                'methods' => 'post',
                'callback' => [$this, 'register']
            ]
        );

        register_rest_route(
            'cooking/v1', // name of the API (endpoint)
            '/recipe-save', // route following our API
            [
                'methods' => 'post',
                'callback' => [$this, 'recipeSave']
            ]
        );
    }

    public function recipeSave(WP_REST_Request $request) 
    {
        $title =  $request->get_param('title');
        $type =  $request->get_param('type');
        $description =  $request->get_param('description');
        $ingredients =  $request->get_param('ingredients');

        $user = wp_get_current_user(); // get user who sent the request

        if ( in_array( 'contributor', (array) $user->roles ) ||
        in_array( 'administrator', (array) $user->roles )
        ) {

            $recipeCreateResult = wp_insert_post(
                [
                    'post_title' => $title,
                    'post_content' => $description,
                    'post_status' => 'publish',
                    'post_type' => 'recipe'
                ]
                );

                if(is_int($recipeCreateResult)) { // recipe created
                    wp_set_post_terms(
                        $recipeCreateResult,
                        [$type],
                        'recipe-type'
                    );

                    wp_set_post_terms(
                        $recipeCreateResult,
                        $ingredients,
                        'ingredient'
                    );
                } 

            return [
                'title' => $title,
                'type' => $type,
                'description' => $description,
                'ingredients' => $ingredients,
                'user' => $user,
                'recipe-id' => $recipeCreateResult
            ];
        }

        
    }

    public function register(WP_REST_Request $request)
    {
        $email = $request->get_param('email');
        $password = $request->get_param('password');
        $username = $request->get_param('username');
        
        $userCreateResult = wp_create_user(
            $username,
            $password,
            $email
        );

        if (is_int($userCreateResult)) {
            $user = new WP_User($userCreateResult);
            $user->remove_role('subscriber');
            $user->add_role('contributor');

            return [
                'success' => true,
                'userId' => $userCreateResult,
                'username'=> $username,
                'email' => $email,
                'role' => 'contributor'
            ];
        }
        else {
            // user wasn't created because there was an error 
            return [
                'success' => false,
                'error' => $userCreateResult,
            ];
        }
    }
}
